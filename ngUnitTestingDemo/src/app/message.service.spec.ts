import { MessageService } from "./message.service"

describe('MessageService',()=>{
    let service:MessageService

    beforeEach(()=>{
        
    })

    it('should have no messages to start',()=>{
        service = new MessageService();

        expect(service.messages.length).toBe(0);
    })

    it('should add a message when add is called',() => {
        service = new MessageService();
        service.add('New message');

        let length = service.messages.length;

        expect(length).toBe(1);
    })

    it('should remove all messages when clear is called',() => {
        service = new MessageService();
        service.add('New message');

        service.clear();

        let length = service.messages.length;
        expect(length).toBe(0);
    })
})