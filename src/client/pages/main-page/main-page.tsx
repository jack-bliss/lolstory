import * as React from 'react';
import { MainPageWrapper } from './main-page-wrapper';
import { MainPageNameInput } from './main-page-name-input';
import { MainPageGoButton } from './main-page-go-button';
import { MainPageNameForm } from './main-page-name-form';
import { History, Location } from 'history';
import { withRouter, match } from 'react-router';

interface MainPageLayoutProps {
  history: History;
  location: Location;
  match: match<any>;
}

interface MainPageLayoutState {
  name: string;
}

class MainPageLayout extends React.Component<MainPageLayoutProps, MainPageLayoutState> {

  constructor(props: MainPageLayoutProps) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleReturnSubmit = this.handleReturnSubmit.bind(this);
  }

  handleNameInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: event.target.value,
    });
  }

  handleReturnSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 13) {
      this.props.history.push('/' + this.state.name);
    }
  }

  render() {
    return <MainPageWrapper>
      <MainPageNameForm>
        <MainPageNameInput 
          value={this.state.name}
          onChange={(e) => this.handleNameInput(e)} 
          onKeyDown={(e) => this.handleReturnSubmit(e)}
        />
        <MainPageGoButton to={'/' + this.state.name}>
          Go
        </MainPageGoButton>
      </MainPageNameForm>
    </MainPageWrapper>;
  }

}

export const MainPage = withRouter(MainPageLayout);
