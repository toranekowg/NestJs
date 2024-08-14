import { Controller, Get, Param } from '@nestjs/common';
import { RangeService } from './range.service';
@Controller('range')
export class RangeController {
  constructor(private RangeService: RangeService) {}
  @Get(':num')
  getRange(@Param() params: any): any {
    return this.RangeService.getRange(params.num);
  }
}
