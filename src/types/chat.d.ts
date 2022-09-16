declare namespace Chat {
  interface RoomInfo {
    roomId: string;
    name: string;
    message: Msg[];
    avatar: string;
  }
  interface RoomState extends RoomInfo {
    isOpen: Boolean;
  }
  interface Msg {
    _id: string;
    message: string;
    createdAt: string;
    sender: string;
  }
}
