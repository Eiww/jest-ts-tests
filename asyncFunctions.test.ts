import { fetchData } from "./asyncFunctions";
import { delay } from "./asyncFunctions";

describe("fetchData", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      text: jest.fn().mockResolvedValue("test data"),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("должна возвращать данные при успешном запросе", async () => {
    const data = await fetchData("https://example.com");
    expect(data).toBe("test data");
    expect(global.fetch).toHaveBeenCalledWith("https://example.com");
  });

  it("должна выбрасывать ошибку при ответе с статусом !ok", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      text: jest.fn().mockResolvedValue("Not found"),
    });

    await expect(fetchData("https://example.com")).rejects.toThrow(
      "Request failed with status 404"
    );
  });

  it("должна выбрасывать ошибку при сбое сети", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Network error")
    );

    await expect(fetchData("https://example.com")).rejects.toThrow(
      "Network error"
    );
  });
});

describe("delay", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("должна разрешаться после указанного времени", async () => {
    const ms = 1000;
    const promise = delay(ms);

    // Продвигаем таймеры на ms миллисекунд
    jest.advanceTimersByTime(ms);

    await expect(promise).resolves.toBeUndefined();
  });

  it("должна вызывать setTimeout с корректными аргументами", () => {
    const setTimeoutSpy = jest.spyOn(global, "setTimeout");
    const ms = 1000;

    delay(ms);

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), ms);
  });
});
