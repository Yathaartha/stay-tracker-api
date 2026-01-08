import {
  Model,
  type ModelStatic,
  type Attributes,
  type FindOptions,
  type WhereOptions,
} from "sequelize";

export abstract class BaseRepository<T extends Model> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async findById(
    id: string,
    options?: FindOptions<Attributes<T>>
  ): Promise<T | null> {
    return this.model.findByPk(id, options);
  }

  async findOne(
    where: WhereOptions<Attributes<T>>,
    options?: FindOptions<Attributes<T>>
  ): Promise<T | null> {
    return this.model.findOne({ where, ...options });
  }

  async findAll(options: FindOptions<Attributes<T>>): Promise<T[]> {
    return this.model.findAll(options);
  }

  async create(data: any): Promise<T> {
    return this.model.create(data);
  }

  async update(
    id: string,
    data: Partial<Attributes<T>>
  ): Promise<[number, T[]]> {
    return this.model.update(data as any, {
      where: { id } as any,
      returning: true,
    });
  }

  async delete(id: string): Promise<number> {
    return this.model.destroy({ where: { id } as any });
  }
}

