export function successData(
  statusCode: number,
  code: string,
  message: string,
) {
  const successMessage = {
    statusCode,
    code,
    message,
  };
  return successMessage;
}
