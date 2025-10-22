<?php

namespace Database\Factories;

use App\Models\Member;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class MemberFactory extends Factory
{
    protected $model = Member::class;

    public function definition(): array
    {
        return [
            'keycloak_id' => $this->faker->word(),
            'email' => $this->faker->unique()->safeEmail(),
            'firstname' => $this->faker->firstName(),
            'lastname' => $this->faker->lastName(),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'city' => $this->faker->city(),
            'zipcode' => $this->faker->word(),
            'last_login_at' => Carbon::now(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'deleted_at' => Carbon::now(),
        ];
    }
}
