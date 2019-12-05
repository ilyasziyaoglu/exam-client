import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Exam',
    icon: 'edit-2-outline',
    link: '/pages/exam',
    children: [
      {
        title: 'Exam Explore',
        link: '/pages/exam/search',
      },
      {
        title: 'Exam Editor',
        link: '/pages/exam/editor',
      },
      {
        title: 'Exam Results',
        link: '/pages/exam/result',
      },
      {
        title: 'Live Exam',
        link: '/pages/exam/live-exam',
      },
    ],
  },
  {
    title: 'User',
    icon: 'person-outline',
    link: '/pages/user',
    children: [
      {
        title: 'List',
        link: '/pages/user/filter',
      },
      {
        title: 'Create User',
        link: '/pages/user/create',
      },
    ],
  },
  {
    title: 'Analyses',
    icon: 'bar-chart-outline',
    link: '/pages/analysis',
    children: [
      {
        title: 'Student Analysis',
        link: '/pages/analysis/student-analysis',
      },
      {
        title: 'Exam Analysis',
        link: '/pages/analysis/exam-analysis',
      },
      {
        title: 'Question Analysis',
        link: '/pages/analysis/question-analysis',
      },
    ],
  },
  {
    title: 'Reports',
    icon: 'file-text-outline',
    link: '/pages/report',
    children: [
      {
        title: 'Student Report',
        link: '/pages/report/student-report',
      },
      {
        title: 'Exam Report',
        link: '/pages/report/exam-report',
      },
      {
        title: 'Question Report',
        link: '/pages/report/question-report',
      },
    ],
  },
];
