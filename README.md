Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:
 - iphone pro max = 14 letter * 1000(users) = 14000
 - with debouncing 3 API calls * 1000(users) = 3000

 Debouncing with 200ms
 - If difference between 2 key strokes is <200ms - DECLINE API call
 >200ms makes an API call
