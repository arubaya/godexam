import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from "@/components/atoms/Alert";
import useGlobalStateStore from "@/stores/useGlobalStateStore";
import "@testing-library/jest-dom";

// Mocking Zustand store
jest.mock("@/stores/useGlobalStateStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedUseGlobalStateStore = useGlobalStateStore as jest.Mock;

// Mocking MuiAlert
jest.mock("@mui/material/Alert", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedMuiAlert = jest.fn();

beforeEach(() => {
  mockedUseGlobalStateStore.mockReturnValue({
    alertData: {
      isOpen: false,
      severity: "info",
      message: "Test Message",
    },
    setOpenAlert: jest.fn(),
  });

  mockedMuiAlert.mockImplementation((props) => <div>{props.children}</div>);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Alert Component", () => {
  test("renders with initial state", () => {
    render(<Alert />);
    expect(screen.queryByText("Test Message")).toBeNull();
  });

  test("renders alert with correct message and severity when open", () => {
    mockedUseGlobalStateStore.mockReturnValueOnce({
      alertData: {
        isOpen: true,
        severity: "success",
        message: "Success Message",
      },
      setOpenAlert: jest.fn(),
    });

    render(<Alert />);
    expect(screen.getByText("Success Message")).toBeInTheDocument();
  });

  test("closes alert when onClose is called", async () => {
    render(<Alert />);

    mockedUseGlobalStateStore.mockReturnValueOnce({
      alertData: {
        isOpen: true,
        severity: "error",
        message: "Error Message",
      },
      setOpenAlert: jest.fn(),
    });

    act(() => {
      userEvent.click(screen.getByText("Error Message"));
    });

    expect(mockedUseGlobalStateStore().setOpenAlert).toHaveBeenCalled();
  });
});
