declare namespace Chat {
  interface RoomInfo {
    roomId: string;
    name: string;
    message: Msg[];
    avatar: string;
  }
  interface Msg {
    message: string;
    createdAt: string;
  }
}
