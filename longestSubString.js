function lengthOfLongestSubstring(s)
{
	var n = s.length;
	var result = 0;
	
	for(var i = 0; i < n; i++)
	{
		var arr = [];
		
		for(var j = i; j < n; j++)
		{
			if (arr[s.charCodeAt(j)] == true)
				break;

			else
			{
				result = Math.max(result, j - i + 1);
				arr[s.charCodeAt(j)] = true;
			}
		}
	}
	return result;
}
console.log(lengthOfLongestSubstring("abcabcbb"));


