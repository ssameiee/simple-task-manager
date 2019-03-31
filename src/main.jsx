import React from 'react';
import Avatar from './components/Avatar';
import TaskItem from './components/TaskItem';
import ProgressBar from './components/ProgressBar';
import EmailNotification from './components/EmailNotification';
import ProjectList from './components/ProjectsList';
import Team from './components/Team';
import Search from './components/Search';
import ProjectsTitle from './components/ProjectsTitle';
import Tasklist from './components/Tasklist';
import TaskName from './components/TaskName';
import TaskTitle from './components/TaskTitle';
import TaskDate from './components/TaskDate';
import TaskDetails from './components/TaskDetails';
import TaskInfo from './components/TaskInfo';
import TaskCompleted from './components/TaskCompleted';
import FileAttach from './components/FileAttach';
import Comment from './components/Comment';
import AttachBtn from './components/AttachBtn';
import SendBtn from './components/SendBtn';
import Stats from './components/Stats';

export default class MainLayout extends React.Component {
  componentDidMount() {
    let i = 0;
    this.setState({ majid: i });

    this.setState({
      data: [
        {
          title: 'Create AdWords campaign 1',
          date: '22 Feb, 2018',
          name: 'Majid',
          userImage: './images/sample1.jpg',
        },
        {
          title: 'Create AdWords campaign 2',
          date: '22 Feb, 2018',
          name: 'Majid',
          userImage: './images/sample2.jpg',
        },
        {
          title: 'Create AdWords campaign 3',
          date: '22 Feb, 2018',
          name: 'Majid',
          userImage: './images/sample3.jpg',
        },
        {
          title: 'Create AdWords campaign 1',
          date: '22 Feb, 2018',
          name: 'Majid',
          userImage: './images/sample1.jpg',
        },
        {
          title: 'Create AdWords campaign 2',
          date: '22 Feb, 2018',
          name: 'Majid',
          userImage: './images/sample2.jpg',
        },
        {
          title: 'Create AdWords campaign 3',
          date: '22 Feb, 2018',
          name: 'Majid',
          userImage: './images/sample3.jpg',
        },
      ],
    });

    // setInterval(() => {
    //   this.setState({ majid: i++ });
    // }, 1000);
  }

  // JSX
  render() {
    return (
      <div className="container flex-container">
        {/* <!-- Start left calmn --> */}
        <div className="container__width--small">
          <div className="border--bottom color--gray align--center padding--base">
            <h3>TASK MANAGER {this.state ? this.state.majid : ''}</h3>
          </div>
          {/* <!-- Start information section --> */}
          <section className="align--center padding--base border--bottom">
            <div className="">
              <Avatar imgSrc="./images/sample3.jpg" />
              <h2
                onClick={() => {
                  alert('HELLO');
                }}
              >
                Natalie Smith
              </h2>
              <h3 className="color--gray">natalie.smith@gmail.com</h3>
              <EmailNotification />
              <ProgressBar />
              <Stats />
            </div>
          </section>
          {/* <!-- Start projects section --> */}
          <section className="padding--base border--bottom">
            <ProjectList />
          </section>
          {/* <!-- End projects section --> */}
          {/* <!-- Start team section --> */}
          <section className="padding--base border__special">
            <Team />
          </section>
          {/* <!-- End team section --> */}
        </div>
        {/* <!-- End left calmn --> */}
        {/* <!-- **************************** --> */}

        {/* <!-- Start middel calmn --> */}
        <div className="container__width--middel">
          <div className="border--bottom border--left color--gray padding--base header">
            <Search />
          </div>
          <ProjectsTitle />
          <div className="projects__list">
            {this.state
              ? this.state.data.map((item, index) => {
                  return (
                    <TaskItem
                      key={index}
                      title={item.title}
                      date={item.date}
                      userImage={item.userImage}
                      alt={item.name}
                    />
                  );
                })
              : null}
          </div>
          {/* <!-- Start button --> */}
          <div className="padding--base border--left align--center border__special">
            <button className="buttons__blue ">Add task</button>
          </div>
          {/* <!-- End button --> */}
        </div>
        {/* <!-- End middel calmn --> */}

        {/* <!-- **************************** --> */}

        {/* <!-- Start right calmn --> */}
        <div className="container__width--large">
          {/* <!-- Start task title--> */}
          <div className="border--bottom padding--special">
            <Tasklist />
          </div>
          {/* <!-- End task title--> */}
          {/* <!-- Start task header --> */}
          <div className="border--bottom border--left">
            <TaskName />
          </div>
          {/* <!-- End task header --> */}
          {/* <!-- Start task details --> */}
          <div className="border--bottom border--left">
            <div className="task__details">
              <TaskTitle />
              <div className="task__details__column-gap">
                <TaskDate />
                <TaskDetails />
                <TaskInfo />
                <TaskCompleted />
                <FileAttach />
              </div>
            </div>
          </div>
          {/* <!-- End task details --> */}
          <div className="task__comment__wrapper">
            <Comment />
            <AttachBtn />
            <SendBtn />
          </div>
        </div>
        {/* <!-- End right calmn --> */}
      </div>
    );
  }
}
