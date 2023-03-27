import { Injectable } from '@nestjs/common';
import { data } from 'src/data';
import { FilterDto } from 'src/filter.dto';

@Injectable()
export class AppService {
  async sort() {
    return data.sort((a, b) => b.item_name.localeCompare(a.item_name));
  }

  async filter({ itemName }: FilterDto) {
    return data.filter((el) =>
      el.item_name.toLowerCase().includes(itemName.toLowerCase()),
    );
  }
}
