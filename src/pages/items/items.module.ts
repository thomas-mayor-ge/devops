/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 14-07-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Items } from './items';
import { DeadlinePipe } from "../../pipes/deadline-pipe";
import { SortDescPipe } from "../../pipes/sortdesc-pipe";
import { DateFormatPipe } from "../../pipes/dateformat-pipe";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NotificationService } from '../../providers/notification-service/notification-service'

@NgModule({
  declarations: [
    Items,
    DeadlinePipe,
    SortDescPipe,
    DateFormatPipe
  ],
  imports: [
    IonicPageModule.forChild(Items)
  ],
  providers: [
    LocalNotifications,
    NotificationService
  ],
  exports: [
    Items
  ]
})
export class ItemsModule {}
