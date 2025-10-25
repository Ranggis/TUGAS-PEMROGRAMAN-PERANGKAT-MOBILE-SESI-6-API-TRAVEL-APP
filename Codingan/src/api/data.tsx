// 🔹 Type Definitions

export type Destination = {
  id: string;
  name: string;
  image: string;
  description: string;
  screen: string;
};

export type WishlistItem = {
  id: string;
  name: string;
  image: string;
  description?: string;
};

// 🔹 Base URL (MockAPI)
const BASE_URL = 'https://68fc9df096f6ff19b9f5ba25.mockapi.io/ranggis';

// ======================================================
// 📍 DESTINATION API
// ======================================================

// Ambil semua destinasi
export async function getDestinations(): Promise<Destination[]> {
  try {
    const res = await fetch(`${BASE_URL}/destinations`);
    if (!res.ok) throw new Error('Failed to fetch destinations');
    return await res.json();
  } catch (err) {
    console.error('❌ Error getDestinations:', err);
    throw err;
  }
}

// Ambil satu destinasi berdasarkan ID
export async function getDestinationById(id: string): Promise<Destination> {
  try {
    const res = await fetch(`${BASE_URL}/destinations/${id}`);
    if (!res.ok) throw new Error('Failed to fetch destination');
    return await res.json();
  } catch (err) {
    console.error('❌ Error getDestinationById:', err);
    throw err;
  }
}

// ======================================================
// ❤️ WISHLIST API
// ======================================================

// Ambil semua wishlist
export async function getWishlist(): Promise<WishlistItem[]> {
  try {
    const res = await fetch(`${BASE_URL}/wishlist`);
    if (!res.ok) throw new Error('Failed to fetch wishlist');
    return await res.json();
  } catch (err) {
    console.error('❌ Error getWishlist:', err);
    throw err;
  }
}

// Tambahkan item ke wishlist
export async function addWishlist(item: Omit<WishlistItem, 'id'>): Promise<WishlistItem> {
  try {
    const res = await fetch(`${BASE_URL}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to add wishlist');
    return await res.json();
  } catch (err) {
    console.error('❌ Error addWishlist:', err);
    throw err;
  }
}

// Hapus item dari wishlist
export async function deleteWishlist(id: string): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/wishlist/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete wishlist');
  } catch (err) {
    console.error('❌ Error deleteWishlist:', err);
    throw err;
  }
}

// ======================================================
// ⚡ Helper Functions (Opsional, biar clean di komponen)
// ======================================================

// Cek apakah item sudah ada di wishlist
export async function isInWishlist(id: string): Promise<boolean> {
  const wishlist = await getWishlist();
  return wishlist.some((item) => item.id === id);
}

// Toggle wishlist (add/remove otomatis)
export async function toggleWishlist(item: WishlistItem): Promise<void> {
  const wishlist = await getWishlist();
  const exists = wishlist.find((w) => w.name === item.name);

  if (exists) {
    await deleteWishlist(exists.id);
  } else {
    await addWishlist({
      name: item.name,
      image: item.image,
      description: item.description,
    });
  }
}
