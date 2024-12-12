# 即时聊天应用消息发送和阅读状态

在即时聊天应用中，了解消息的发送和阅读状态是用户体验的重要组成部分。本节将详细描述个人聊天和群聊中消息状态的显示方式及其功能。

## 个人聊天消息状态

在个人聊天中，消息的发送和阅读状态通过勾号来表示，以帮助用户了解对方是否接收到并阅读了消息。

- **单勾 (✓)：消息已成功发送**
  - 当用户发送消息后，一个单勾将出现在消息旁边，表示消息已成功发送至服务器。
  - 这表明消息已经到达对方的设备，但对方可能尚未查看。

- **双勾 (✓✓)：消息已读**
  - 当对方打开聊天窗口并查看了消息，单勾将变为双勾。
  - 这表示消息已经被对方阅读，用户可以确认对方已经看到所发送的信息。

![placeholder](https://via.placeholder.com/800x400.png)

## 群聊消息状态

在群聊中，消息的阅读状态通过圆环图标来表示，以便用户快速了解消息在群聊中的阅读情况。

- **灰色圆环：消息全部未读**
  - 当消息发送至群聊后，其右侧会出现一个灰色圆环，表示当前消息尚未被任何群成员读取。

- **部分绿色圆环：消息部分已读**
  - 当部分群成员读取了消息，圆环会部分变为绿色。绿色色块代表已读取该消息的群成员所占的比例。
  - 这提供了一种视觉化的方式，让用户直观地了解消息的阅读进度。

- **绿色圆环：消息全部已读**
  - 当所有群成员都已读取消息时，圆环会变为绿色并显示一个对号。
  - 这表明消息已被会话中的所有参与者阅读。

- **查看阅读详情**
  - 点击圆环图标，用户可以查看具体的已读和未读用户列表。
  - **已读列表**：显示已查看该消息的群成员。
  - **未读列表**：显示尚未查看该消息的群成员。

![placeholder](https://via.placeholder.com/800x400.png)

## 状态更新的细节

- **实时更新**：消息状态会根据接收方的操作实时更新，确保发送方能够尽快了解接收情况。
- **通知机制**：用户可以选择开启或关闭关于消息已读状态的通知，以平衡隐私和信息透明度。

---

以上即为关于即时聊天应用中消息发送和阅读状态的基本设计和功能描述。根据具体应用的需求和用户反馈，这些状态的显示方式可以进一步优化和调整。