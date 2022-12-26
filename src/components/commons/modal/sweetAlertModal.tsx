import Swal from 'sweetalert2';

export function SuccessModal(SuccessMessge: string) {
  void Swal.fire({
    icon: 'success',
    title: SuccessMessge,
  });
}

export function ErrorModal(ErrorMessage: string) {
  void Swal.fire({
    icon: 'error',
    title: ErrorMessage,
  });
}
