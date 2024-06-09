import { Module } from '@nestjs/common';
import { ContentController } from '@src/http/rest/controller/content.controller';
import { ContentManagementService } from '@src/core/service/content-management.service';
import { MediaPlayerService } from '@src/core/service/media-player.service';
import { ContentRepository } from './persistence/repository/content.repository';
import { VideoRepository } from './persistence/repository/video.repository';
import { MediaPlayerController } from './http/rest/controller/media-player.controller';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceModule.forRoot()],
  controllers: [ContentController, MediaPlayerController],
  providers: [
    ContentManagementService,
    MediaPlayerService,
    ContentRepository,
    VideoRepository,
  ],
})
export class AppModule {}
