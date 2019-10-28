class ApiCentralCenter {
  formatData(data) {
    return {
      success: true,
      errorMessage: null,
      data: data
    };
  }
  operationDB(params) {
    const { dbName, data } = params || {};
    const desktopNote_DB = window.desktopNote_DB[dbName];
    return window.desktopNote_DB.transaction("rw", desktopNote_DB, async () => {
      return await desktopNote_DB.where(data).toArray();
    });
  }
  async query(params) {
    console.log('query_params --> ', params);
    const data = await this.operationDB(params);
    console.log('query_data --> ', data);
    return this.formatData(data);
  }
}
export default new ApiCentralCenter();
