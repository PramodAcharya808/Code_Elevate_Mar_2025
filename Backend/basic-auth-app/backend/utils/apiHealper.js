// give me a api response object for sending req, res

export const apiResponse = (statusCode, message, data = null) => {
  return {
    status: statusCode,
    message: message,
    data: data,
  };
};
