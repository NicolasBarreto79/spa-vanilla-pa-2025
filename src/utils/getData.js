const API_URL = 'https://api.spacexdata.com/v5/launches';

export const getLaunches = async () => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (e) {
    console.error('Error getLaunches:', e);
    return [];
  }
};

export const getLaunchById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    return await res.json();
  } catch (e) {
    console.error('Error getLaunchById:', e);
    return null;
  }
};
