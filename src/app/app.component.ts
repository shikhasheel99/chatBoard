import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-app';

  messages = [
    { content: 'Hello, how can I assist you?', fromBot: true, timestamp: new Date() }
  ];

  messageContent: string = '';

  
  sendMessage() {
    if (this.messageContent.trim()) {
      this.messages.push({ content: this.messageContent, fromBot: false, timestamp: new Date() });
      this.messageContent = '';
      setTimeout(() => {
        this.botReply();
      }, 1000); 
    }
  }


  botReply() {
    this.messages.push({ content: 'I am a bot, here to help!', fromBot: true, timestamp: new Date() });
  }

  
  scrollToBottom(chatContainer: HTMLElement) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

