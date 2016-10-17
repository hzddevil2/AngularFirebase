function chatService($firebaseArray){

    var messagesRef = firebase.database().ref().child("messages");
    var chat = {
       messageNumber: 15
    }

    chat.saveSettings = function(msg){
        chat.msg = msg;
        if(chat.messageNumber != chat.msg) {
            chat.messageNumber = chat.msg;
        }
    };
   
    chat.getMessages = function(){
        return $firebaseArray(messagesRef);
    };

    
    chat.shownMessages = function(){
        return $firebaseArray(messagesRef.limitToLast(chat.messageNumber));
    };

    chat.sendMessage = function(message){
        chat.getMessages().$add(message);
    };

    return chat;
}

angular.module('angularFirebase')
    .factory('ChatService', ['$firebaseArray', chatService]);