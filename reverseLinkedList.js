function reverseList(head) {
            if (head == null || head.next == null)
                return head;

            var rest = reverseList(head.next);
            head.next.next = head;
     
            head.next = null;
    
            return rest;
        }