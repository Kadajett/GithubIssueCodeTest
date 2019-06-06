import ApiKeyEntryContainer from './apiKeyEntry';
import TextInputContainer from './textInput';
import RepositoryItemContainer from './repositoryItem';
import RepositoryListContainer from './repositoryList';
import IssueListContainer from './issueList';
import IssueItemContainer from './issueItem';
import ButtonGeneralContainer from './buttonGeneral';
import AvatarIconContainer from './avatarIcon';
import ApiKeyErrorAlertModalContainer from './apiKeyErrorAlert';
import HeaderContainer from "./header";


// This is obviously suboptimal for large applications, but for small ones, it is easier to write IMO!
const Components = {
    ApiKey: ApiKeyEntryContainer,
    TextInput: TextInputContainer,
    RepositoryItem: RepositoryItemContainer,
    RepositoryList: RepositoryListContainer,
    IssueList: IssueListContainer,
    IssueItem: IssueItemContainer,
    ButtonGeneral: ButtonGeneralContainer,
    AvatarIcon: AvatarIconContainer,
    ApiKeyErrorAlert: ApiKeyErrorAlertModalContainer,
    Header: HeaderContainer,
}

export default Components;
