export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

export interface EcosystemCardProps {
  icon: string;
  title: string;
  description: string;
  id?: string;
}
