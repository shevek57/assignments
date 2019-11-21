function resolveAfter3Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }

  resolveAfter3Seconds().then(r => console.log(r));

  async function resolver () {
    const data = await resolveAfter3Seconds();
    console.log(data);   
}

resolver();