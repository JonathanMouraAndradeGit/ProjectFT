import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class Pipe1 implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        return value.toUpperCase().split("")[0]
    }
}