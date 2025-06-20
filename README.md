#Search Suggestion System

This program returns a list of lists. Each list contains up to 3 product names with the current prefix (based on 
characters typed so far in searchWord), arranged lexically.

You can use this class by creating an instance: const system = new SearchSuggestionSystem(products) #prducts is the list of items of values you are searching from

Illustration of how to use it with expected output:
  const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
  const searchWord = "mouse";

  const system = new SearchSuggestionSystem(products);
  const output = system.getSuggestions(searchWord);

  console.log(output);

   """
   Expected Output:
'[
     ["mobile", "moneypot", "monitor"],
     ["mobile", "moneypot", "monitor"],
     ["mouse", "mousepad"],
     ["mouse", "mousepad"],
     ["mouse", "mousepad"]
   ]
"""
