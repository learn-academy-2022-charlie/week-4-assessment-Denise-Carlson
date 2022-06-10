    # ASSESSMENT 4: Ruby Coding Practical Questions
    # MINASWAN ✌️

    # --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


    # num1 = 7
    # Expected output: '7 is odd'
    #num2 = 42
    # Expected output: '42 is even'
    #num3 = 221
    # Expected output: '221 is odd'
    #pseudocode use a method that inputs a number as a parameter. Using a conditional statement I am going to see if the number is divisible by two using modulus. If number is divisible by two then number is even if it is not the number is odd. My expected output: num1 should return num1 is odd, num2 should return num2 is even and num3 should return that num3 is odd. 

    def is_odd_or_even(num)
        num1 = 7  
        num2 = 42
    # Expected output: '42 is even'
        num3 = 221
    # Expected output: '221 is odd'
    if num % 2 == 0  
        "#{num} is even"
    else 
        "#{num} is odd"
        end
    end

    p is_odd_or_even ( 7)
    p is_odd_or_even ( 42)
    p is_odd_or_even ( 21)








    # -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

    album1 = 'Rubber Soul'
    # Expected output: 'Rbbr Sl'
    album2 = 'Sgt Pepper'
    # Expected output: 'Sgt Pppr'
    album3 = 'Abbey Road'
    # Expected output: 'bby Rd'
    def no_vowel(str)
        str.delete('a,e,i,o,u,A,E,I,O,U')
    end
    p no_vowel (album1)
    p no_vowel (album2)
    p no_vowel (album3)

    # -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
    def pal(string)
    palindrome_tester1 = 'Racecar'
    # # Expected output: 'Racecar is a palindrome'
    palindrome_tester2 = 'LEARN'
    # # Expected output: 'LEARN is not a palindrome'
    palindrome_tester3 = 'Rotator'
    # # Expected output: 'Rotator is a palindrome'

    string.downcase == string.reverse ?
        "#{pal} is a palindrome" :
        "#{pal} is not a palindrome"
    end 

    p pal ('Racecar')
    p pal ('Learn')
    p pal ('Rotator')
    # looking at the words I can see that the first two letters are reversed in the last 2 letters of the word or string of words to form the pallidrome.   

  


