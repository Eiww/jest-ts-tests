import { getUserById } from "./userService";
import axios, { AxiosResponse, AxiosError } from "axios";
import { describe, test, jest, expect } from "@jest/globals";

describe("getUserById", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Возвращает пользователя при успешном запросе", async () => {
    const mockUser = { id: "1", name: "John Doe" };
    const mockResponse: AxiosResponse = {
      data: mockUser,
      status: 200,
      statusText: "OK",
      headers: {},
      config: { headers: {} } as any,
    };

    jest.spyOn(axios, "get").mockResolvedValue(mockResponse);

    const result = await getUserById("1");

    expect(axios.get).toHaveBeenCalledWith("/users/1");
    expect(result).toEqual(mockUser);
  });

  test("Выбрасывает ошибку при HTTP-ошибке", async () => {
    const mockError = new Error("Not Found") as unknown as AxiosError;
    mockError.name = "AxiosError";
    mockError.code = "ERR_HTTP_REQUEST";
    mockError.response = {
      data: {},
      status: 404,
      statusText: "Not Found",
      headers: {},
      config: { headers: {} } as any,
    };
    mockError.request = { headers: {} } as any;
    mockError.config = { headers: {} } as any;
    mockError.isAxiosError = true;
    mockError.toJSON = () => ({});

    jest.spyOn(axios, "get").mockRejectedValue(mockError);

    await expect(getUserById("2")).rejects.toThrow("Not Found");
    expect(axios.get).toHaveBeenCalledWith("/users/2");
  });

  test("Проверяет корректность ID", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: {},
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    } as AxiosResponse);

    await expect(getUserById("")).rejects.toThrow("ID cannot be empty");
  });
});
