function showToast(msg, icon = 'check_circle') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');
  if (!toast || !toastMsg) return;
  toastMsg.innerText = msg;
  toastIcon.innerText = icon;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3500);
}

function requestQuote(grade) {
  const select = document.getElementById('inq-calorie');
  if (select) {
    select.value = grade;
  }
  const cta = document.getElementById('kontak-cta');
  if (cta) {
    cta.scrollIntoView({ behavior: 'smooth' });
  }
  showToast('Spesifikasi ' + grade + ' dipilih. Silakan lengkapi form penawaran.', 'description');
}

function handleInquiry(e) {
  e.preventDefault();
  const alert = document.getElementById('inquiry-alert');
  if (alert) alert.classList.remove('hidden');
  showToast('Permintaan penawaran harga Anda berhasil dikirimkan!', 'done_all');
  e.target.reset();
}

function downloadCatalog() {
  showToast('Mengunduh katalog spesifikasi batu bara PT Terra Coal...', 'download');
  setTimeout(() => {
    showToast('Katalog berhasil diunduh.', 'check_circle');
  }, 1500);
}
