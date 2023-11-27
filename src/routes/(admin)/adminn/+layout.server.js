

  export const load = async ({ setHeaders, cookies  }) => {
    // Définir les en-têtes HTTP
    setHeaders({
        'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
    });
    let connect = cookies.get('connect');
    if (!connect) {
      cookies.set('connect', 'true', { path: '/' });
    }

  
    return {
      connect,
    };
  };

  



