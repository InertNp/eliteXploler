export function header(token: any) {
  return {
    headers: {
      Authorization: token,
    },
  };
}
