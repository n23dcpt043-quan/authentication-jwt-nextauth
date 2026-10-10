// NHIỆM VỤ 2: Thiết lập Route Handler
// 1. Import handlers từ file auth.ts ở thư mục gốc
// 2. Export các phương thức GET và POST từ handlers

import { handlers } from "@/auth" // Hoặc đường dẫn tương đối tùy thuộc vào cấu hình tsconfig như "../../../auth"
export const { GET, POST } = handlers