import { Inject, Injectable } from '@nestjs/common';
import { DefaultTypeOrmRepository } from '@contentModule/infra/module/typeorm/repository/default-typeorm.repository';
import { Content } from '@contentModule/persistence/entity/content.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ContentRepository extends DefaultTypeOrmRepository<Content> {
  constructor(@Inject(DataSource) readonly dataSource: DataSource) {
    super(Content, dataSource);
  }
}
