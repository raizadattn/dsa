

function createVault() {
    // Load the SDK for JavaScript
    var AWS = require('aws-sdk');
    // Set the region 
    AWS.config.update({ region: 'REGION' });

    // Create a new service object
    var glacier = new AWS.Glacier({ apiVersion: '2012-06-01' });
    // Call Glacier to create the vault
    glacier.createVault({ vaultName: 'YOUR_VAULT_NAME' }, function (err) {
        if (!err) {
            console.log("Created vault!")
        }
    });
}
function archiveToS3Glacier() {
    // Load the SDK for JavaScript
    var AWS = require('aws-sdk');
    // Set the region
    AWS.config.update({ region: 'REGION' });

    // Create a new service object and buffer
    var glacier = new AWS.Glacier({ apiVersion: '2012-06-01' });
    buffer = Buffer.alloc(2.5 * 1024 * 1024); // 2.5MB buffer

    var params = { vaultName: 'YOUR_VAULT_NAME', body: buffer };
    // Call Glacier to upload the archive.
    glacier.uploadArchive(params, function (err, data) {
        if (err) {
            console.log("Error uploading archive!", err);
        } else {
            console.log("Archive ID", data.archiveId);
        }
    });
}

function multiPart() {
    // Create a new service object and some supporting variables
    var glacier = new AWS.Glacier({ apiVersion: '2012-06-01' }),
        vaultName = 'YOUR_VAULT_NAME',
        buffer = new Buffer(2.5 * 1024 * 1024), // 2.5MB buffer
        partSize = 1024 * 1024, // 1MB chunks,
        numPartsLeft = Math.ceil(buffer.length / partSize),
        startTime = new Date(),
        params = { vaultName: vaultName, partSize: partSize.toString() };

    // Compute the complete SHA-256 tree hash so we can pass it
    // to completeMultipartUpload request at the end
    var treeHash = glacier.computeChecksums(buffer).treeHash;

    // Initiate the multipart upload
    console.log('Initiating upload to', vaultName);
    // Call Glacier to initiate the upload.
    glacier.initiateMultipartUpload(params, function (mpErr, multipart) {
        if (mpErr) { console.log('Error!', mpErr.stack); return; }
        console.log("Got upload ID", multipart.uploadId);

        // Grab each partSize chunk and upload it as a part
        for (var i = 0; i < buffer.length; i += partSize) {
            var end = Math.min(i + partSize, buffer.length),
                partParams = {
                    vaultName: vaultName,
                    uploadId: multipart.uploadId,
                    range: 'bytes ' + i + '-' + (end - 1) + '/*',
                    body: buffer.slice(i, end)
                };

            // Send a single part
            console.log('Uploading part', i, '=', partParams.range);
            glacier.uploadMultipartPart(partParams, function (multiErr, mData) {
                if (multiErr) return;
                console.log("Completed part", this.request.params.range);
                if (--numPartsLeft > 0) return; // complete only when all parts uploaded

                var doneParams = {
                    vaultName: vaultName,
                    uploadId: multipart.uploadId,
                    archiveSize: buffer.length.toString(),
                    checksum: treeHash // the computed tree hash
                };

                console.log("Completing upload...");
                glacier.completeMultipartUpload(doneParams, function (err, data) {
                    if (err) {
                        console.log("An error occurred while uploading the archive");
                        console.log(err);
                    } else {
                        var delta = (new Date() - startTime) / 1000;
                        console.log('Completed upload in', delta, 'seconds');
                        console.log('Archive ID:', data.archiveId);
                        console.log('Checksum:  ', data.checksum);
                    }
                });
            });
        }
    });

}