/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Search in a sorted array
 var search = function(nums, target) {
    
    let lo = 0
    let hi = nums.length-1
    let mid;
    // let res = -1
    while(lo<=hi){
        mid = Math.floor((lo+hi)/2)
        
        //left sorted
        if(nums[mid] == target){
            // res = mid
           return mid
           }
        if(nums[lo] <= nums[mid]){
           if( target< nums[mid] && target>=nums[lo]){
                hi = mid - 1               
           }else{
                lo = mid + 1
           }   
           }else{
               if( target> nums[mid] && target <= nums[hi]){
                  lo = mid+1
                  }else{
                      hi = mid -1
                  }
}
    }
    
return -1
    
};