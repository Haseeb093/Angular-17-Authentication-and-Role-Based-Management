import { Imenu } from '../interfaces/imenu'

export const Menus: Imenu[] =
    [
        //--------------- Multi User Menu ---------------------------//
        {
            path: 'dashboard',
            title: 'Dashboard',
            roles: ['Admin', 'User']

        },
        //--------------- Admin Menus -------------------------------//
        {
            path: 'admincomp1',
            title: 'Admin Comp 1',
            roles: ['Admin']
        },
        {
            path: 'admincomp2',
            title: 'Admin Comp 2',
            roles: ['Admin']
        },

        //--------------- User Menus -------------------------------//
        {
            path: 'usercomp1',
            title: 'User Comp 1',
            roles: ['User']
        },
        {
            path: 'usercomp2',
            title: 'User Comp 2',
            roles: ['User']
        },
    ]
