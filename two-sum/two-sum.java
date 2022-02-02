class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map= new HashMap<Integer, Integer>(); 
        
        for(int i = 0; i < nums.length; i++) {
            int num = nums[i]; 
            
            if (map.get(target - num) != null) {
                return new int[] {i, map.get(target - num)};
            }
            
            map.put(num, i);
        }
        return new int[] {-1, -1};
    }
}