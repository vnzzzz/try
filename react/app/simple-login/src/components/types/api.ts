// User
export type UserType = {
  email: string;
  id: number;
  is_active: boolean;
  items: number[];
};

export type UserStateType = {
  users:
    | {
        isLoading: false;
        users: UserType[];
      }
    | {
        isLoading: true;
      };
};

// Item
export type ItemType = {
  title: string;
  description: string;
  id: number;
  owner_id: number;
};

export type ItemStateType = {
  items:
    | {
        isLoading: false;
        items: ItemType[];
      }
    | {
        isLoading: true;
      };
};
