import React, { useState } from 'react';
import { ProfilePage } from '../pages/ProfilePage';

export const ProfileContainer = () => {
  const [profile, setProfile] = useState({
    firstName: 'Alex',
    lastName: 'Smith',
    email: 'alex@example.com',
    dietaryOption: '',
    skillLevel: '',
    servingSize: '',
  });

  const [initialProfile] = useState(profile); // for cancel
  const [saving, setSaving] = useState(false);

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setProfile(initialProfile);
  };

  const handleSave = async () => {
    setSaving(true);
    // TODO: call /api/profile update here
    console.log('Saving profile', profile);
    setTimeout(() => setSaving(false), 600);
  };

  return (
    <ProfilePage
      profile={profile}
      onChange={handleChange}
      onCancel={handleCancel}
      onSave={handleSave}
      saving={saving}
    />
  );
};
