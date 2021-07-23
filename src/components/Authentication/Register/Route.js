import React from 'react';
const PersonalInfo=React.lazy(() => import('./PersonalInfo'));
const PictureConfirmation =React.lazy(() => import('./PictureConfirmation'));





const AccountRoutes = [
  
  

  { path: '/register', exact:true },
  { path: '/picture', name: 'picture', component: PersonalInfo},
 { path: '/personal', name: 'personal', component: PictureConfirmation },
 
];

export default AccountRoutes;
