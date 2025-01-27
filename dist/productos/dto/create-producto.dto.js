"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProductoDto {
}
exports.CreateProductoDto = CreateProductoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripción es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser un texto' }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El precio es obligatorio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El precio debe ser un valor positivo' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "precio", void 0);
//# sourceMappingURL=create-producto.dto.js.map