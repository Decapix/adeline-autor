

export async function load({ cookies }) {
    let connect = cookies.get('connect');
    if (!connect) {
      cookies.set('connect', 'true', { path: '/' });
    }

  
    return {
      connect,
    };
  };

  



