"use strict";
function chatCtrl(ChatService, $firebaseAuth) {
    var vm = this,
        auth = $firebaseAuth();

    vm.messageNumber = 15;
    ChatService.saveSettings(vm.messageNumber);

    vm.saveSettings = function(){
        ChatService.saveSettings(vm.messageNumber);
        vm.shownMessages = ChatService.shownMessages();
    };    

    vm.messages = ChatService.getMessages();

    vm.shownMessages = ChatService.shownMessages();
   
    vm.sendMessage = function(){
        if( vm.author != null ){
            var message = {
                authorName: vm.author.displayName,
                authorId: vm.author.uid,
                authorPhoto: vm.author.photoURL,
                text: vm.newMessage
            }
        }else alert('Please Login');

        if(vm.newMessage != ''){
            ChatService.sendMessage(message);
            vm.newMessage = '';
        }else{
            alert('Type the message text');
        }

    };

    vm.login = function(){
        auth.$signInWithPopup('google');
    }

    vm.logout = function(){
        auth.$signOut();
    }

    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
    })

}

angular.module('angularFirebase')
    .controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl]);