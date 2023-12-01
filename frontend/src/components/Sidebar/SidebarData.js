import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa'

export const SidebarData = [
  {
    title: 'Tours',
    path: '/dashboard/tours',
    icon: <MdIcons.MdTour />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill />,

    subNav: [
      {
        title: 'Tour List',
        path: '/dashboard/tours/tourlist',
        icon: ""
      },
      {
        title: 'Tour Add',
        path: '/dashboard/tours/touradd',
        icon: ""
      },
    ]
  },
  {
    title: 'Customers',
    path: '/dashboard/customers',
    icon: <MdIcons.MdPerson2 />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill />,

    subNav: [
      {
        title: 'Customer List',
        path: '/dashboard/customers/customerlist',
        icon: "",
        cName: 'sub-nav'
      },
      {
        title: 'Customer Add',
        path: '/dashboard/customers/customeradd',
        icon: ""
      },
    ]
  },
  {
    title: 'Bookings',
    path: '/dashboard/bookings',
    icon: <FaIcons.FaCalendarCheck />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    iconOpened: <RiIcons.RiArrowDownSFill />,

  },
];