import { ChangeEvent } from "react";

export interface FormData {
  date: string | null;
  time: string | null;
  timeZone: string | null;
  ownerEmail: string | null;
}

export interface SelectedDateTimeFirst {
  date: string | null;
  time: string | null;
  timeZone: string | null;
  decodedValue: string | null;
}

export interface SecondFormData {
  name: string;
  email: string;
  additionalInfo: string;
  date: string | null;
  time: string | null;
  timeZone: string | null;
  ownerEmail: string | null;
  ownerName: string | null;
}

export interface FormData3 {
  country: string;
  fullName: string;
  welcomeMessage: string;
  language: string;
  dateFormat: string;
  timeFormat: string;
  timeZone: string;
  image: string | ArrayBuffer | null;
}

export interface AvailabilityData {
  selectedDays: string[];
  selectedHour1: string;
  selectedHour2: string;
  email: string;
}

export interface AvailabilityliceState {
  data: AvailabilityData | null;
  loading: boolean;
  error: string | null;
}

export interface SelectedDateTime {
  id: string | null;
  name: string | null;
  email: string | null;
  additionInfo: string | null;
  date: string | null;
  time: string | null;
  timeZone: string | null;
  createdAt: string | null;
}

export interface ScheduleEventsSliceState {
  data: SelectedDateTime | null;
  loading: boolean;
  error: string | null;
}

export interface UserData {
  id: string;
  image: string;
  createdAt: string;
  hashedPassword: string;
  updatedAt: string;
  userName: string;
  fullName: string;
  email: string;
  welcomeMessage: string;
  language: string;
  dateFormat: string;
  country: string;
  timeFormat: string;
  timeZone: string;
}

export interface UserState {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
}

export interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}

export interface ReduxProviderProps {
  children: React.ReactNode;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthInputField {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  name?: string;
}

export interface CheckboxProps {
  label: string;
  onChange: (label: string, checked: boolean) => void;
}

export interface DatePickerProps {
  onDateChange: (date: string) => void;
}

export interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  defaultValue?: string;
}

export interface CalendarProps {
  selectedDate?: Date;
  onDateChange?: (date: Date) => void;
}

export interface AvailabilityData {
  selectedDays: string[];
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface TimeSlotProps {
  time: string;
  onClick: () => void;
}

export interface TimeZone {
  label: string;
  value: string;
}

export interface TimezoneSelectorProps {
  onChange: (value: string | null) => void;
}

export interface EventAnalysis {
  id: string;
  name: string;
  time: string;
  date: string;
  timeZone: string;
  email: string;
  additionalInfo: string;
  createdAt: string;
}

export interface SelectedDateTimeAnalysis {
  id: string | null;
  name: string | null;
  email: string | null;
  additionInfo: string | null;
  date: string | null;
  time: string | null;
  timeZone: string | null;
  createdAt: string | null;
}

export interface EventSidebar {
  id: string;
  name: string;
  time: string;
  date: string;
  timeZone: string;
  email: string;
  ownerEmail: string;
  additionalInfo: string;
  createdAt: string;
}
export interface ModallSidebar {
  id: string;
  name: string;
  time: string;
  date: string;
  timeZone: string;
  email: string;
  additionalInfo: string;
  createdAt: string;
}

export interface SelectedDateTimeSideBar {
  id: string | null;
  name: string | null;
  email: string | null;
  ownerEmail: string | null;
  additionalInfo: string | null;
  date: string | null;
  time: string | null;
  timeZone: string | null;
  createdAt: string | null;
}

export interface UserDataSignUp {
  email: string;
  hashedPassword: string;
  fullName: string;
  userName: string;
  image: string;
  welcomeMessage: string;
  language: string;
  dateFormat: string;
  timeFormat: string;
  country: string;
  timeZone: string;
}

// types.ts
export interface TimeSlotProps {
  time: string;
  onClick: () => void;
}

export interface TimeSlotData {
  time: string;
  label: string;
}

export interface DropdownOption {
  value: string;
  label: string;
}

export interface PropsProfile {
  handleFileChange: (files: FileList | null) => void;
}

export interface MySession {
  user: {
    email: string;
  };
}

export interface UploadDataApi {
  name: string;
  email: string;
  additionalInfo: string;
  time: string;
  date: string;
  timeZone: string;
  ownerEmail: string;
  ownerName: string;
}

export interface AnalysisBoxx {
  total: number;
  boxName: string;
}

export interface AuthInputFieldd {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  name?: string;
}
