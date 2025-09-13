import React, { useState } from 'react';
import { MessageCircle, Send, Smile, Paperclip, Search, MoreVertical, Phone, Video } from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'Hey! How was your weekend?',
      time: '2h',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      avatar: 'MR',
      lastMessage: 'Thanks for the coffee chat yesterday!',
      time: '1d',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Emma Wilson',
      avatar: 'EW',
      lastMessage: 'Looking forward to the event next week',
      time: '2d',
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: 'David Chen',
      avatar: 'DC',
      lastMessage: 'The project looks great!',
      time: '3d',
      unread: 0,
      online: false
    }
  ];

  const messages = [
    { id: 1, text: 'Hey! How was your weekend?', sender: 'other', time: '2:30 PM' },
    { id: 2, text: 'It was amazing! Went hiking in the mountains. How about you?', sender: 'me', time: '2:32 PM' },
    { id: 3, text: 'That sounds incredible! I spent it working on my startup idea', sender: 'other', time: '2:35 PM' },
    { id: 4, text: 'Oh nice! What kind of startup?', sender: 'me', time: '2:36 PM' },
    { id: 5, text: 'It\'s a health tech platform focused on mental wellness', sender: 'other', time: '2:38 PM' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <div className="card h-full flex flex-col">
                {/* Header */}
                <div className="card-header">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
                    <button className="btn btn-ghost btn-sm">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search conversations..."
                      className="input pl-10"
                    />
                  </div>
                </div>

                {/* Conversations */}
                <div className="flex-1 overflow-y-auto">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedChat(conversation)}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedChat?.id === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="avatar avatar-md">
                            <span>{conversation.avatar}</span>
                          </div>
                          {conversation.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                            <span className="text-xs text-gray-500">{conversation.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                            {conversation.unread > 0 && (
                              <span className="badge badge-primary text-xs">
                                {conversation.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              {selectedChat ? (
                <div className="card h-full flex flex-col">
                  {/* Chat Header */}
                  <div className="card-header">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="avatar avatar-md">
                          <span>{selectedChat.avatar}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
                          <p className="text-sm text-gray-500">
                            {selectedChat.online ? 'Online' : 'Last seen recently'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="btn btn-ghost btn-sm">
                          <Phone className="w-5 h-5" />
                        </button>
                        <button className="btn btn-ghost btn-sm">
                          <Video className="w-5 h-5" />
                        </button>
                        <button className="btn btn-ghost btn-sm">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'me'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="card-footer">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                      <button type="button" className="btn btn-ghost btn-sm">
                        <Paperclip className="w-5 h-5" />
                      </button>
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="input flex-1"
                      />
                      <button type="button" className="btn btn-ghost btn-sm">
                        <Smile className="w-5 h-5" />
                      </button>
                      <button type="submit" className="btn btn-primary btn-sm">
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="card h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a conversation</h3>
                    <p className="text-gray-600">Choose a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;