import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { StoreModule, Action } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE, ApplicationState } from './store/application-state';
import { storeFreeze } from 'ngrx-store-freeze';
import { LOAD_USER_THREADS_ACTION, LoadUserThreadsAction } from './store/actions';

function storeReducer(state: ApplicationState, action: Action): ApplicationState {

  switch (action.type) {
    case LOAD_USER_THREADS_ACTION:
      handleLoadUserTHreadsAction(state, action);
    break;
    default:
      return state;
  }
  // LoadUserThreadsAction
}

function handleLoadUserTHreadsAction(state: ApplicationState, action: LoadUserThreadsAction): ApplicationState {

  const newState: ApplicationState = Object.assign({}, state);

  newState.storeData = {
    participants: _.keyBy(action.payload.participants, 'id'),
    messages: _.keyBy(action.payload.messages, 'id'),
    threads: _.keyBy(action.payload.threads, 'id'),
  };
  console.log('new state', newState);
  return newState;
}

export const metaReducers = [storeFreeze];

export const reducers = {
  storeReducer
};

@NgModule({
  declarations: [
    AppComponent,
    UserSectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(reducers, {metaReducers, initialState: INITIAL_APPLICATION_STATE})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
