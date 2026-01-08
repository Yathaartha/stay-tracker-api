import User from "../../models/User.js";
import { BaseRepository } from "./base.repository.js";

class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.findOne({ username });
  }
}

export const userRepository = new UserRepository();

